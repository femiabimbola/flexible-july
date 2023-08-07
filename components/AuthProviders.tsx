"use client"
// Typescript features is used here

import { useState, useEffect } from "react";
import { getProviders, signIn } from 'next-auth/react'
import Button from "./Button";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
  // Having ? means it is optional
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null)

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    }
    fetchProviders();
  }, [])

  if (providers) {
    return (
      <div>
        {
          Object.values(providers).map((provider: Provider, i) => (
            <Button handleClick={() => signIn(provider?.id)} key={i} title="Sign in" />)
          )
        }
      </div>
    )
  }

}

export default AuthProviders;