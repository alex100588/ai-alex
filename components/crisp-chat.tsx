"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("34fcee08-3852-4bbb-9d15-09d4890aff68");
  }, []);

  return null;
};
