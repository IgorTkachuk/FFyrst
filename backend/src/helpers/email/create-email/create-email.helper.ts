import { MailOptions } from '~/common/types';

const createMail = (theme: string, link: string): MailOptions => {
  return {
    mailTheme: theme,
    data: {
      link: link,
    },
  };
};

export { createMail };
