import english from './en/translation.json';
import spanish from './es/translation.json';

enum Languages {
  ENGLISH = 'en',
  SPANISH = 'es',
}

export const getI18n = ({
  currentLocale,
}: {
  currentLocale?: string;
}) => {
  switch (currentLocale) {
    case Languages.ENGLISH:
      return english;
    case Languages.SPANISH:
      return spanish;
    default:
      return english;
  }
};
