import { migrate } from "../migrations";
 
export async function GET() {
  try {
    migrate();
    return Response.json({ message: "Migrasyon başarıyla tamamlandı" });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}