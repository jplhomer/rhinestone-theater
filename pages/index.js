import Head from "next/head";

export default () => (
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
        color: "white",
        fontSize: "2em",
        marginBottom: "1em",
        textAlign: "center"
      }}
    >
      Rhinestone Theater
      <br />
      Saturday, March 21 - 7:30pm Central
    </p>
    <iframe
      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjplhomer%2Fvideos%2F10218816588064094%2F&width=400"
      width="500"
      height="281"
      scrolling="no"
      frameborder="0"
      allowTransparency={true}
      allowFullScreen={true}
      title="Live stream video"
      style={{
        margin: "auto",
        maxWidth: "100%"
      }}
    />
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
