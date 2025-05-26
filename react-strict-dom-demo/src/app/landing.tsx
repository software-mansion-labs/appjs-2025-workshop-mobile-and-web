import { html, css } from "react-strict-dom";
import { tokens } from "@/styles/tokens.stylex";

export default function LandingPage() {
  return (
    <html.div style={styles.container}>{/*Write some code here */}</html.div>
  );
}

const styles = css.create({
  container: {
    height: "100%",
  },
});
