import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";

// Service account credentials
const credentials = {
  client_email: "votesaathi-voice@votesaathi-495020.iam.gserviceaccount.com",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDwkiJeo+1Fb7IL\n6Th89KHUhcPrwO+fN051JgepA0dwCUZ8wEWIAY8SF8RYwh4yJYya+OO5ZXbGEgbk\n1oweS0avV/hCzwFX3+ksQTXPYhFKVH+qKmNkVGwr56L11FuuyPHSnF5HhzDrnUiM\nvX/t/cikp7EYmRoUjgQGdhYXAZ8LV7A5QNMM7W7DAcRx6Hafp4toDbXLUmLNdngm\nFzYXR7iAaI1bWm+ONIYmd4Gv8tDecPWlCjOACk0vI3lfgZUAhUeKv4f/pDU0I8M6\n8bbpcsJz5WxGKve32EwdphaSaG1UmtvFP2rLNXFyruiw94RFz83cFuadV5EY2xbb\ngaa175FBAgMBAAECggEAQ6Bg5wff8FAI1g5WodHHGE4OGFzhP3m1pXruVlWkpFsH\nJJSMN0Jw7J4fxO+0u1YQ45OpuHlMXTu+EmA5fV6d3Ta2hFlawFAiZR1juguQXrvI\nM5a83/xXeDQifEaZC1ZTnGf2nNblKqbJOT8gEk/wMlEtmIOZcEPH3+UcKpV7Fx2g\nz2LvZR2z5fzWpAcAZlOpRkIJtTuV1+aMAHHzOKufaIL3olH+B7G9JF672k0Y7T5x\nzkwDWLamLzVaeUUcfJJ0xVpBaudx+zC1oXW42zEW2yb7VUT6s7MLFBMgG4VrSGDK\nvsUn15Hf96gQBah48Xw9H+dvtQQ32TSz8rcIHma0XQKBgQD9ThAzgO14q3GKVLk5\nB1Ml4wBMTYqq2sEBUK5C0szOmp4pYsBGZ1uKuNNkjvLxepBPQ86HOuocrhHSTCpJ\nVDfz1KYbjMhfFjAiQ4xWLJ9Hg00+5VpiXtuTeTV3KtUkynxCEqZoKrNFfk+sYpIL\n8j5DUa0Jg6I6EGU0ZlZha0AbbwKBgQDzIWL4ZSVsgFq0vsS13xXpyzUSIB6GFWox\nU9x7yKv9+ZnA7d2z54c45rc+umiPOKSXlaLd/hdTUJfnNZXw0ErrFF4AgT4fQUdd\n2RIcUQYy4yxo2SIRaaNDlWNZisQIOCJPDmFHtMlEtZO5V+h0yJv35cwuVAeQA2ig\nQL2thGWGTwKBgA7afAK5JbO0wfStoSrh7hNDq2nOBjqcl0K/e2h5uf7HfEzK+KFo\nQCrzSZoU89QLLtknDb5KSx4havQc+UHRiXJn3tGwwLMqtunbcig/d5uW7Hmqs1Ef\nZNrR+buiLFt68CxjsZRcJKUHkh52rT+8FcCW0oHDUUj8WyLmeVw/EMRLAoGAeB+6\nwndW8jDIoBzRG/rI3OZlpjrwWdcizJRej1oqgCVebhAYRdbS3K5BQ2DeYETgLXTl\nL0FnTOa45qd3GbAQE+3QM/enNdIO7LNfW1Y89c+AFZ2SU4AaBj49A/Snvlfdu6mj\nLsaH2sbL4fspAupLBUQoiYtC4UiN3P+ft6d+cckCgYEAqNnDlodbBkaWzLl+4Aw2\n8hRpoxWF38DxAiMPBO4K4yyQ5KEDEes3t2Xfn5+KeKwqSw+8Xp7Rk0UXKqE6OAgk\n+oDxfNZ0SKF6Z5rzjgYzPVRlK5A5E+2rMybnJEDbT0Lp5ACoM8fDK02h/edfmymV\n314ivj7Ms8WwzyDSBZmC/D8=\n-----END PRIVATE KEY-----\n",
};

export async function POST(req: Request) {
  try {
    const { audio, languageCode } = await req.json();

    if (!audio) {
      return NextResponse.json({ error: "No audio provided" }, { status: 400 });
    }

    // Authenticate and get an access token
    const auth = new GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    });
    const accessToken = await auth.getAccessToken();

    // Send request to Google Cloud Speech REST API
    const response = await fetch(
      "https://speech.googleapis.com/v1/speech:recognize",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          audio: { content: audio },
          config: {
            encoding: "ENCODING_UNSPECIFIED",
            sampleRateHertz: 48000,
            languageCode: languageCode || "en-IN",
            enableAutomaticPunctuation: true,
          },
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || "Speech API Error");
    }

    const transcription = data.results
      ?.map((result: any) => result.alternatives[0].transcript)
      .join("\n");

    return NextResponse.json({ text: transcription || "" });
  } catch (error: any) {
    console.error("Speech REST Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to transcribe" },
      { status: 500 }
    );
  }
}
