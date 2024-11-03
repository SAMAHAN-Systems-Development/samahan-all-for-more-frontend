// currentPage: 1
// data: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// totalEvents: 50
// totalPages: 5

// Type used for the return of ReactQuery or UseQuery

export interface EventsResponse {
  currentPage: number;
  data: Event[];
  totalEvents: number;
  totalPages: number;
}
