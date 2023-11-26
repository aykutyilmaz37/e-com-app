
export const sessionHeadersConfig = () => {
  const sessionID = sessionStorage.getItem('sessionID')
  return {
    headers: { 'Content-Type': 'application/json', 'Session-ID': sessionID },
  };
};
