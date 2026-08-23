import { Anchor, Group, Text } from "@mantine/core";

type BreadcrumbParent = {
  href: string;
  label: string;
};

type PageBreadcrumbsProps = {
  currentPage: string;
  parent?: BreadcrumbParent;
};

export function PageBreadcrumbs({
  currentPage,
  parent = { href: "/", label: "Home" },
}: PageBreadcrumbsProps) {
  return (
    <Group
      component="nav"
      aria-label="Brotkrümelnavigation"
      gap="sm"
      maw="92rem"
      mx="auto"
      mb="clamp(2rem, 4vw, 4rem)"
    >
      <Anchor
        component="a"
        href={parent.href}
        c="var(--color-ink)"
        fz="xs"
        fw={600}
        lts="0.07em"
        tt="uppercase"
        underline="hover"
      >
        {parent.label}
      </Anchor>
      <Text c="var(--color-muted)" fz="xs" aria-hidden="true">
        /
      </Text>
      <Text
        aria-current="page"
        c="var(--color-muted)"
        fz="xs"
        fw={600}
        lts="0.07em"
        tt="uppercase"
      >
        {currentPage}
      </Text>
    </Group>
  );
}
