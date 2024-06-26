import { Box, Typography } from '@mui/material';
import { ImageSection } from './components/ImageSection';
import { BcraSwiper } from './components/BcraSwiper';
import { DolarSection } from './components/DolarSection';
export default async function Home() {
  return (
    <main>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: { sx: 0, md: '0 2rem', lg: '0 4rem' } }}>
        <ImageSection />
        <Typography variant="h1" sx={{ fontSize: "3rem" }}>
          Bienvenido a FinherArg
        </Typography>
        <Typography variant='h2' sx={{ fontSize: '1.5rem' }}>
          En esta plataforma podrás encontrar diversas herramientas e información sobre finanzas.
          ¡Se está trabajando para poder brindar nuevas soluciones!
        </Typography>
        <DolarSection />
        <BcraSwiper />
      </Box>
    </main>
  );
}
