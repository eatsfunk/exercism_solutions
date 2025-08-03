export function createVisitor(name, age, ticketId) {
  return {name, age, ticketId};
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  return tickets[ticketId] === null ? 'not sold' : (
    tickets[ticketId] ? 'sold to ' + tickets[ticketId] : 'unknown ticket id'
    );
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version; 
}
