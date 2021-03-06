import Head from "next/head";
import Countdown from "../components/Countdown";

export default function Index() {
  const date = new Date('03/21/2020 7:30 PM -0500 (CDT)');
  const showVideo = typeof window !== 'undefined' ? !/hideVideo/.test(window.location.href) : true;

  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <p
        style={{
          fontSize: "2em",
          marginBottom: "1em",
          textAlign: "center"
        }}
      >
        Rhinestone Theater
        <br />
        {date.toLocaleString()}
      </p>
      {showVideo && <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjplhomer%2Fvideos%2F10218816588064094%2F&width=400"
        width="500"
        height="281"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        title="Live stream video"
        style={{
          margin: "auto",
          maxWidth: "100%"
        }}
      />}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Head>
        <title>Rhinestone Theater</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
    </div>
  );
}
