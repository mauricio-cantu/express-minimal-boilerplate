import i18n from 'i18n';
import path from 'path';

i18n.configure({
  defaultLocale: 'pt-br',
  objectNotation: true,
  directory: path.join(path.resolve(), 'src', 'locales'),
  api: {
    __: '$t',
  },
});

export default i18n;
