import { createClient } from "@supabase/supabase-js";
import UploadFile from "@/components/photos/upload";

export default async function Notes() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
  const supabase = await createClient(supabaseUrl, supabaseKey);
  const { data: notes } = await supabase.from("notes").select();

  return (
    <div>
      <h1>Notes</h1>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
      <UploadFile />

    </div>
  )
}