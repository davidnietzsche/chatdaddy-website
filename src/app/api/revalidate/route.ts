import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Sanity webhook → on-demand ISR revalidation
// Set this URL as a webhook in Sanity: https://chatdaddy.tech/api/revalidate
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { _type, slug } = body;

    // Revalidate the specific page
    switch (_type) {
      case "blogPost":
        revalidatePath(`/blog/${slug?.current}`);
        revalidatePath("/blog");
        revalidatePath("/sitemap.xml");
        break;
      case "integration":
        revalidatePath(`/application/${slug?.current}`);
        revalidatePath("/integration");
        revalidatePath("/sitemap.xml");
        break;
      case "feature":
        revalidatePath(`/features/${slug?.current}`);
        revalidatePath("/features");
        revalidatePath("/sitemap.xml");
        break;
      case "page":
        revalidatePath(`/${slug?.current === "home" ? "" : slug?.current}`);
        break;
      case "siteSettings":
        revalidatePath("/", "layout");
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, type: _type });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
