
export const sessionHeadersConfig = () => {
  const sessionID = localStorage.getItem('sessionID')
  return {
    headers: { 'Content-Type': 'application/json', 'Session-ID': sessionID },
  };
};
