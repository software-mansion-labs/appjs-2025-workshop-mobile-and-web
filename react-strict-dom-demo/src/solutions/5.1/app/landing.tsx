import { html, css } from "react-strict-dom";
import { tokens } from "@/styles/tokens.stylex";

export default function LandingPage() {
  return (
    <html.div style={styles.container}>
      <html.h1 style={styles.heading}>
        An amazing landing page for our product
      </html.h1>
      <html.p style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.{" "}
      </html.p>
      <html.div style={styles.buttonGroup}>
        <html.button style={styles.button}>
          <html.span>Action Call!</html.span>
        </html.button>
        <html.button style={styles.button}>
          <html.span>Learn more</html.span>
        </html.button>
      </html.div>
    </html.div>
  );
}

const styles = css.create({
  container: {
    padding: 12,
    backgroundColor: "#fff5f0",
    height: "100%",
  },
  heading: {
    padding: 40,
    fontSize: 40,
    textAlign: "center",
    color: "#555",
  },
  text: {
    fontSize: 14,
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 24,
  },
  button: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: "#ff5500",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#e64900",
    },
  },
});
