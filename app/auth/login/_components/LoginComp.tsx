"use client";

import { Eye, EyeOff, InfoIcon, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

import Link from "next/link";

const LoginComp = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email:emailAddress, password }),
    });
    if (res.ok) router.push("/main");
    else alert("Invalid credentials");
  }

  return (
    
      <div className=" flex  justify-center mx-auto  "
      
      >
        <form onSubmit={submit} className="w-full max-w-md space-y-6">
          
          <div className="space-y-6 mt-36 ">
            <div
              
              className="space-y-2  text-center"
            >
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Login 
              </h1>
            </div>

            <div className="grid gap-4">
              <div  className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                className="bg-black"
                  onChange={(e) => setEmailAddress(e.target.value)}
                  value={emailAddress}
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div  className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Eye className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <InfoIcon className="w-3 h-3 " />
                  <p className="text-xs ">
                    Password must be at least 8 characters long!
                  </p>
                </div>
              </div>
              <div >
                <Button
                  type="submit"
                  className="w-full cursor-pointer  mt-2"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex gap-2 items-center">
                      <LoaderCircle className="h-8 w-8 animate-spin" />
                      <p>Logging in...</p>
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
            <div >
              <div className="text-center text-sm">
                Create an account?{" "}
                <Link href="/auth/signup" className=" underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
         
        </form>
      </div>
    
  );
};

export default LoginComp;
