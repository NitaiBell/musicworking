// Create a Synth and connect it to the speakers
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// Function to play a single note
function playNote(note) {
    synth.triggerAttackRelease(note, "8n"); // "8n" means eighth-note duration
}

// Function to play chords
function playChord(notes) {
    synth.triggerAttackRelease(notes, "8n");
}

// Event listeners for individual notes
document.getElementById("do").addEventListener("click", () => playNote("C4")); // Do
document.getElementById("re").addEventListener("click", () => playNote("D4")); // Re
document.getElementById("mi").addEventListener("click", () => playNote("E4")); // Mi

// Event listeners for chords
document.getElementById("C_major").addEventListener("click", () => playChord(["C4", "E4", "G4"])); // C Major
document.getElementById("G_major").addEventListener("click", () => playChord(["G3", "B3", "D4"])); // G Major

