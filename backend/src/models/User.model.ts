import mongoose, { Schema, Document } from "mongoose"; // Add Document import
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { StringValue } from "ms";


interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    IspasswordCorrect(password: string): Promise<boolean>; // Change Boolean to boolean
    GenerateAccessToken(): string;
}


interface JWTPayload {
    _id: string;
    email: string;
    name: string;
}


const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } else {
        next();
    }
});

userSchema.methods.IspasswordCorrect = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.GenerateAccessToken = function (): string {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  const expiry = process.env.ACCESS_TOKEN_EXPIRY;

  if (!secret || !expiry) {
    throw new Error("JWT env vars missing");
  }

  const payload= {
    _id: this._id.toString(),
    email: (this.email),
    name: (this.name)
  };

  // Explicit SignOptions
  const options: jwt.SignOptions = {
    expiresIn: expiry as StringValue
  };

  // Explicit secret type
  return jwt.sign(payload, secret as jwt.Secret, options);
};

userSchema.methods.GenerateRefreshToken = function (): string {
  const secret = process.env.REFRESH_TOKEN_SECRET;
  const expiry = process.env.REFRESH_TOKEN_EXPIRY;

  if (!secret || !expiry) {
    throw new Error("JWT env vars missing");
  }

  const payload= {
    _id: this._id.toString(),
    email: (this.email),
    name: (this.name)
  };

  
  const options: jwt.SignOptions = {
    expiresIn: expiry as StringValue
  };


  return jwt.sign(payload, secret as jwt.Secret, options);
};
export const User = mongoose.model<IUser>("User", userSchema);