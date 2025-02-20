"use client";

import { createClient } from "@supabase/supabase-js";
import React from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function FileUpload() {
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (!file) return;

    try {
        const { data, error } = await supabase
        .storage
        .from('project-jean-kattia')
        .upload('photos/avatar1.png', file, {
          cacheControl: '3600',
          upsert: false
        })
      console.log(data, error);
      if (error) {
        console.log("Error uploading file:", error);
      } else {
        console.log("File uploaded successfully:", data);
      }
    } catch (err) {
      console.error("Error during file upload:", err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}
