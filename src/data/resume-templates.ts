export type TemplateVariant = {
  id: string;
  label: string;
  image: string;
  swatch: string;
};

export type ResumeTemplate = {
  title: string;
  image: string;
  variants: TemplateVariant[];
};

const COLOR_SWATCHES: Record<string, string> = {
  black: "#1a1a1a",
  blue: "#2f6fd6",
  brown: "#6d4c35",
  dark_blue: "#1e3a5f",
  dark_green: "#1b4332",
  dark_orange: "#c05621",
  dark_red: "#8b2635",
  gold: "#c4a962",
  green: "#2d6a4f",
  grey: "#6b7280",
  indigo: "#4338ca",
  mint: "#4db6a5",
  orange: "#e07b24",
  plum: "#6b4c7a",
  purple: "#6d28d9",
  red: "#c62828",
  tan: "#c4a574",
  yellow: "#d4a012",
};

const TEMPLATE_VARIANT_FILES: Record<string, string[]> = {
  RRM001: [
    "RRM001_Tan.jpg",
    "RRM001_Black.jpg",
    "RRM001_Blue.jpg",
    "RRM001_Green.jpg",
    "RRM001_Orange.jpg",
  ],
  RRM002: [
    "RRM002_Green.jpg",
    "RRM002_Black.jpg",
    "RRM002_Blue.jpg",
    "RRM002_Dark_Orange.jpg",
    "RRM002_Plum.jpg",
  ],
  RRM003: [
    "RRM003_Blue.jpg",
    "RRM003_Green.jpg",
    "RRM003_Grey.jpg",
    "RRM003_Orange.jpg",
    "RRM003_Plum.jpg",
  ],
  RRM004: [
    "RRM004_Black.jpg",
    "RRM004_Blue.jpg",
    "RRM004_Brown.jpg",
    "RRM004_Dark_Green.jpg",
    "RRM004_Dark_Red.jpg",
  ],
  RRM005: [
    "RRM005_Dark_Blue.jpg",
    "RRM005_Black.jpg",
    "RRM005_Blue.jpg",
    "RRM005_Green.jpg",
    "RRM005_Red_page-0001.jpg",
  ],
  RRM006: [
    "RRM006_Brown.jpg",
    "RRM006_Dark_Blue.jpg",
    "RRM006_Green.jpg",
    "RRM006_Indigo.jpg",
    "RRM006_Plum.jpg",
  ],
  RRM007: [
    "RRM007_Blue.jpg",
    "RRM007_Black.jpg",
    "RRM007_Brown.jpg",
    "RRM007_Dark_Blue.jpg",
    "RRM007_Gold.jpg",
  ],
  RRM008: [
    "RRM008_Brown.jpg",
    "RRM008_Black.jpg",
    "RRM008_Blue.jpg",
    "RRM008_Mint.jpg",
    "RRM008_Purple.jpg",
  ],
  RRM009: [
    "RRM009_Green.jpg",
    "RRM009_Black.jpg",
    "RRM009_Purple.jpg",
    "RRM009_Red.jpg",
    "RRM009_Yellow.jpg",
  ],
};

function parseColorKey(templateId: string, filename: string): string {
  const withoutExt = filename.replace(/\.jpg$/i, "");
  const colorSegment = withoutExt
    .replace(new RegExp(`^${templateId}_`, "i"), "")
    .replace(/_page-\d+$/i, "");
  return colorSegment.toLowerCase();
}

function parseColorLabel(colorKey: string): string {
  return colorKey
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function swatchForColor(colorKey: string): string {
  return COLOR_SWATCHES[colorKey] ?? "#5c6b62";
}

function buildVariant(templateId: string, filename: string): TemplateVariant {
  const colorKey = parseColorKey(templateId, filename);
  return {
    id: colorKey,
    label: parseColorLabel(colorKey),
    image: `/templates/${templateId}/${filename}`,
    swatch: swatchForColor(colorKey),
  };
}

function buildTemplate(templateId: string, filenames: string[]): ResumeTemplate {
  const variants = filenames.map((filename) => buildVariant(templateId, filename));

  return {
    title: templateId,
    image: variants[0]?.image ?? `/templates/${templateId}/${filenames[0]}`,
    variants,
  };
}

export function getDefaultVariantMap(
  templates: ResumeTemplate[],
): Record<string, string> {
  return Object.fromEntries(
    templates.map((template) => [
      template.title,
      template.variants[0]?.id ?? "",
    ]),
  );
}

export const resumeTemplates: ResumeTemplate[] = Object.entries(
  TEMPLATE_VARIANT_FILES,
).map(([templateId, filenames]) => buildTemplate(templateId, filenames));

export function getResumeTemplateImage(title: string): string {
  const template = resumeTemplates.find((item) => item.title === title);
  return template?.image ?? "";
}
