import type { Metadata } from "next";
import {
  Anchor,
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export const metadata: Metadata = {
  title: "Datenschutz | Auto Deko",
  description: "Datenschutzerklärung von Auto Deko.",
};

const sectionTitleProps = {
  order: 2 as const,
  fz: "lg",
  mb: 12,
};

export default function PrivacyPage() {
  return (
    <Box
      component="main"
      bg="var(--color-canvas)"
      c="var(--color-ink)"
      mih="100vh"
      px="clamp(1.25rem, 5vw, 5.5rem)"
      py="clamp(4rem, 8vw, 8rem)"
    >
      <Box maw="52rem" mx="auto">
        <Text
          c="var(--color-accent)"
          fz="xs"
          fw={700}
          lts="0.12em"
          mb={20}
          tt="uppercase"
        >
          Rechtliches
        </Text>

        <Title
          order={1}
          ff="var(--font-display)"
          fz="clamp(2.75rem, 6vw, 5.5rem)"
          fw={500}
          lh={0.98}
          lts="-0.04em"
          tt="uppercase"
        >
          Datenschutzerklärung
        </Title>

        <Box
          bg="var(--color-paper)"
          mt="clamp(2.5rem, 6vw, 5rem)"
          p="clamp(1.5rem, 4vw, 4rem)"
        >
          <Stack gap={32}>
            <Box component="section" aria-labelledby="controller-heading">
              <Title id="controller-heading" {...sectionTitleProps}>
                1. Verantwortlicher
              </Title>
              <Text lh={1.75}>
                Auto Deko
                <br />
                Inhaber: Marco Selch und David Kokai
                <br />
                Wolfsbacherstraße 26
                <br />
                95458 Bayreuth
              </Text>
              <Text c="var(--color-muted)" lh={1.75} mt="sm">
                Für Datenschutzanfragen kannst du unser{" "}
                <Anchor
                  component="a"
                  href="/contact"
                  c="var(--color-ink)"
                  fw={600}
                  underline="always"
                >
                  Kontaktformular
                </Anchor>{" "}
                verwenden.
              </Text>
            </Box>

            <Divider color="var(--color-line)" />

            <Box component="section" aria-labelledby="logs-heading">
              <Title id="logs-heading" {...sectionTitleProps}>
                2. Bereitstellung der Website und Server-Logfiles
              </Title>
              <Text c="var(--color-muted)" lh={1.75}>
                Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch
                erforderliche Verbindungsdaten. Dazu können IP-Adresse, Datum und Uhrzeit
                des Zugriffs, aufgerufene Seite, Referrer-URL, Browser, Betriebssystem und
                übertragene Datenmenge gehören. Die Verarbeitung erfolgt zur sicheren und
                fehlerfreien Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Logdaten werden nur so lange gespeichert, wie dies für
                Betrieb, Sicherheit und Fehleranalyse erforderlich ist.
              </Text>
            </Box>

            <Divider color="var(--color-line)" />

            <Box component="section" aria-labelledby="contact-heading">
              <Title id="contact-heading" {...sectionTitleProps}>
                3. Kontaktformular
              </Title>
              <Stack gap="sm">
                <Text c="var(--color-muted)" lh={1.75}>
                  Wenn du uns über das Kontaktformular schreibst, verarbeiten wir deinen
                  Namen, deine E-Mail-Adresse, eine freiwillig angegebene Telefonnummer,
                  das ausgewählte Anliegen, deine Nachricht und gegebenenfalls den Bezug
                  zu einem Produkt. Die Angaben werden ausschließlich zur Bearbeitung und
                  Beantwortung deiner Anfrage verwendet.
                </Text>
                <Text c="var(--color-muted)" lh={1.75}>
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um die
                  Anbahnung oder Durchführung eines Vertrags geht. Bei sonstigen Anfragen
                  erfolgt die Verarbeitung aufgrund unseres berechtigten Interesses an
                  einer sachgerechten Kommunikation nach Art. 6 Abs. 1 lit. f DSGVO.
                </Text>
                <Text c="var(--color-muted)" lh={1.75}>
                  Für den E-Mail-Versand nutzen wir den Dienst Resend als
                  Auftragsverarbeiter. Die Formulardaten werden dazu an Resend übermittelt
                  und von dort an uns zugestellt. Wir löschen Anfragedaten, sobald sie für
                  die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen
                  Aufbewahrungspflichten entgegenstehen.
                </Text>
              </Stack>
            </Box>

            <Divider color="var(--color-line)" />

            <Box component="section" aria-labelledby="shopify-heading">
              <Title id="shopify-heading" {...sectionTitleProps}>
                4. Produktdaten von Shopify
              </Title>
              <Text c="var(--color-muted)" lh={1.75}>
                Unser Produktkatalog wird serverseitig über die Shopify Storefront API
                geladen. Dabei rufen unsere Server Produktinformationen wie Titel, Bilder,
                Preise und Verfügbarkeit ab. Bei diesem Abruf werden von uns keine
                personenbezogenen Daten der Websitebesucher an Shopify übermittelt. Ein
                Shopify-Warenkorb oder Shopify-Checkout ist auf dieser Website derzeit
                nicht eingebunden.
              </Text>
            </Box>

            <Divider color="var(--color-line)" />

            <Box component="section" aria-labelledby="storage-heading">
              <Title id="storage-heading" {...sectionTitleProps}>
                5. Cookies und lokale Speicherung
              </Title>
              <Text c="var(--color-muted)" lh={1.75}>
                Wir verwenden derzeit keine Analyse-, Tracking- oder Marketing-Cookies.
                Soweit technisch notwendige Cookies oder lokale Browserspeicher eingesetzt
                werden, dienen sie ausschließlich dem Betrieb und der Darstellung der
                Website.
              </Text>
            </Box>

            <Divider color="var(--color-line)" />

            <Box component="section" aria-labelledby="external-heading">
              <Title id="external-heading" {...sectionTitleProps}>
                6. Externe Links
              </Title>
              <Text c="var(--color-muted)" lh={1.75}>
                Diese Website enthält einen Link zu Instagram. Erst wenn du den Link
                aufrufst, wird eine Verbindung zum jeweiligen Anbieter hergestellt. Für
                die anschließende Verarbeitung gelten die Datenschutzbestimmungen des
                externen Anbieters.
              </Text>
            </Box>

            <Divider color="var(--color-line)" />

            <Box component="section" aria-labelledby="rights-heading">
              <Title id="rights-heading" {...sectionTitleProps}>
                7. Deine Rechte
              </Title>
              <Text c="var(--color-muted)" lh={1.75} mb="sm">
                Im Rahmen der gesetzlichen Voraussetzungen hast du insbesondere folgende
                Rechte:
              </Text>
              <List c="var(--color-muted)" lh={1.75} spacing="xs">
                <ListItem>Auskunft über deine verarbeiteten Daten</ListItem>
                <ListItem>Berichtigung unrichtiger Daten</ListItem>
                <ListItem>Löschung oder Einschränkung der Verarbeitung</ListItem>
                <ListItem>Datenübertragbarkeit</ListItem>
                <ListItem>
                  Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen
                </ListItem>
              </List>
              <Text c="var(--color-muted)" lh={1.75} mt="sm">
                Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren.
                Zuständig ist insbesondere die Aufsichtsbehörde deines gewöhnlichen
                Aufenthaltsorts, deines Arbeitsplatzes oder des Orts des mutmaßlichen
                Verstoßes.
              </Text>
            </Box>

            <Divider color="var(--color-line)" />

            <Box component="section" aria-labelledby="security-heading">
              <Title id="security-heading" {...sectionTitleProps}>
                8. Sicherheit und Aktualisierung
              </Title>
              <Text c="var(--color-muted)" lh={1.75}>
                Die Website nutzt eine verschlüsselte HTTPS-Verbindung. Wir passen diese
                Datenschutzerklärung an, wenn sich die Website, die eingesetzten Dienste
                oder die rechtlichen Anforderungen ändern.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
