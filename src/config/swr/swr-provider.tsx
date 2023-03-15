import { AxiosError } from 'axios';
import React, { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

const normalizeError = (error: AxiosError) => {
  // if([404, 500].includes(error.status) ) {
  //   Toast.show({placement: 'top', color: 'danger.500', title: 'Ocorreu um erro, tente novamente.' })
  //   return;
  // }

  return error;
};

const SwrProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        onError: normalizeError,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export { SwrProvider };
