import './App.scss';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

function App() {
  let value, handleChange;
  return (
    <div className="App">
      <h1>nyc coders!</h1>
      <Button variant="contained">Hello World</Button>
      <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
    </div>
  );
}

export default App;
