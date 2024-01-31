import initTranslations from "../i18n";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <section>
      <h1 className="text-xl text-center font-semibold">{t("hello")}</h1>
    </section>
  );
}
