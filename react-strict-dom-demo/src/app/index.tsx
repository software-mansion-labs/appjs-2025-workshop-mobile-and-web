import { Platform } from "react-native";
import { html, css } from "react-strict-dom";
import { tokens } from "@/styles/tokens.stylex";
import { useRouter } from "expo-router";

function printPlatform() {
  console.log(`onClick called on ${Platform.OS}`);
}

export default function IndexRoute() {
  const router = useRouter();

  return (
    <html.div style={styles.container}>
      <html.h1 style={[styles.title, { color: tokens.label }]}>
        React strict Dom
      </html.h1>
      <html.p>
        This is a paragraph. We can use all the nice DOM elements, including
        semantic elements which are native to web.
      </html.p>
      <html.section style={styles.section}>
        <html.h2>Links and buttons</html.h2>
        <html.a href="https://google.com">
          Link (href does not work on mobile) Go to google
        </html.a>
        <html.br />
        <html.button
          style={[styles.button, { padding: tokens.spacingSmall }]}
          onClick={() => printPlatform()}
        >
          Button
        </html.button>
        <html.br />
        <html.p>Link below uses navigation from expo-router</html.p>
        <html.a style={styles.link} onClick={() => router.navigate("/landing")}>
          Go to landing page
        </html.a>
      </html.section>
      <html.section style={styles.section}>
        <html.h2>Html list</html.h2>
        <html.ul>
          <html.li>Apples</html.li>
          <html.li>Oranges</html.li>
          <html.li>Pears</html.li>
        </html.ul>
      </html.section>
    </html.div>
  );
}

// https://facebook.github.io/react-strict-dom/api/css/create/
const styles = css.create({
  container: {
    padding: {
      // unfortunately we cannot use variables inside css.create
      default: 12,
      "@media (min-width: 800px)": 36,
    },
    margin: 10,
  },
  section: {
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    cursor: "pointer",
    textDecoration: "underline",
  },
  button: {
    width: 120,
    backgroundColor: "#f54842",
    color: "#fff",
    borderStyle: "solid",
    borderColor: "darkred",
    borderRadius: 4,
    cursor: "pointer",
  },
});
