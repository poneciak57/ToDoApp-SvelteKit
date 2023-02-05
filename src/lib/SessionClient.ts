import type Session from '$auth/interfaces/Session.interface';
import DSessionClient from '$auth/SessionClient.impl';
const SessionClient = new DSessionClient<Session>();
export default SessionClient;
