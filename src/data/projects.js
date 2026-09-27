import raiinet from '../Assets/Images/raiinet.png';
import raiinetTerminal from '../Assets/Images/raiinet-terminal.png';
import procMon from '../Assets/Images/procMon.png';
import oracle from '../Assets/Images/oracle-image.png';

// Featured descriptions checked against the linked repositories in September 2026.
// RAIInet's public repository contains screenshots only; no architecture is inferred.
export const projects = [
  {
    id: 'oracle', title: 'Oracle', featured: true,
    description: 'Select code on GitHub and get an explanation alongside it, with context from the rest of the repository.',
    image: oracle, tags: ['Python', 'FastAPI', 'ChromaDB', 'TypeScript'], github: 'https://github.com/Krish-310/aura',
    notes: [
      { title: 'Reading code in context', text: 'A selected function rarely tells the whole story. The extension sends the selection to a Python backend, which retrieves up to five related code snippets from an indexed repository before asking the model for an explanation.' },
      { title: 'Getting the response into the page', text: 'The API streams the explanation as newline-delimited JSON. It sends text as it arrives and stops the stream if the browser disconnects. Repository indexing runs separately, with ChromaDB storing the code context.' },
    ],
  },
  {
    id: 'process-monitor', title: 'Process Monitor', featured: true,
    description: 'A macOS terminal monitor for CPU and memory usage, with keyboard controls for sorting and grouping processes.',
    image: procMon, tags: ['C++', 'libproc', 'Mach', 'ncurses'], github: 'https://github.com/Krish-310/Process-Monitor',
    notes: [
      { title: 'From OS counters to a live view', text: 'libproc supplies process information and Mach supplies system statistics. The monitor keeps previous CPU counters for each process so it can calculate usage between samples, then redraws the terminal with ncurses.' },
      { title: 'Controls and rough edges', text: 'Sort by CPU or memory, or group processes by name. This is macOS-only, and the total RAM calculation still differs from Activity Monitor by up to about 1 GB. That discrepancy is documented in the repository.' },
    ],
  },
  {
    id: 'raiinet', title: 'RAIInet', featured: true,
    description: 'A C++ board game with both a terminal interface and an X11 graphical view.',
    image: raiinet, secondaryImage: raiinetTerminal, tags: ['C++', 'Xlib'], github: 'https://github.com/Krish-310/RAIInet-public', sourceLabel: 'Screenshots on GitHub',
    notes: [
      { title: 'Two interfaces', text: 'The board is presented as either a text-based terminal display or a graphical X11 window. Both versions are shown here; the graphical version needs X11 support on the host system.' },
      { title: 'Available to view', text: 'The implementation is private. The public repository has screenshots of both interfaces.' },
    ],
  },
  { id: 'finvest', title: 'Finvest Advisor', description: 'An investment recommendation app built with Python and Streamlit.', tags: ['Python', 'Streamlit', 'NumPy', 'Pandas'], github: 'https://github.com/Krish-310/Finvest-Advisor-HTV8', demo: 'https://finvestadvisor.streamlit.app/' },
  { id: 'bookstore', title: 'Used Book Store', description: 'A used-book catalogue with a React frontend and a Node.js backend.', tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'], github: 'https://github.com/Krish-310/Used-Book-Store' },
  { id: 'currency', title: 'Currency Converter', description: 'A desktop currency converter using exchange-rate APIs and Tkinter.', tags: ['Python', 'APIs', 'Tkinter'], github: 'https://github.com/Krish-310/Python-Currency-Converter' },
  { id: 'giphygram', title: 'Giphygram', description: 'A GIF-focused progressive web app.', tags: ['JavaScript', 'PWA', 'HTML', 'CSS'], github: 'https://github.com/Krish-310/Giphygram-Project', demo: 'https://krish-310.github.io/Giphygram-Project/' },
  { id: 'portfolio', title: 'This website', description: 'The React portfolio I originally built by hand, and am still updating.', tags: ['React', 'CSS', 'Bootstrap'], github: 'https://github.com/Krish-310/Personal-Portfolio-Website' },
];
