import React from 'react';
import style from './cadCliente.module.scss'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'

export default function CadCliente() {
    return (
        <>
            <h1 className={style.title}>Cadastro de Cliente</h1>
            <div className={style.container}>
                <TextField required id="outlined-basic" label="Nome" variant="outlined" sx={{ width: '100%' }} />

                <TextField required id="outlined-basic" label="RG" variant="outlined" sx={{ width: '25%' }} />
                <TextField required id="outlined-basic" label="CPF" variant="outlined" sx={{ width: '25%' }} />
                <TextField required id="outlined-basic" label="Nascimento" variant="outlined" sx={{ width: '25%' }} />
                <TextField required id="outlined-basic" label="Telefone" variant="outlined" sx={{ width: '25%' }} />

                <TextField required id="outlined-basic" label="Endereço" variant="outlined" sx={{ width: '50%' }} />
                <TextField required id="outlined-basic" label="Bairro" variant="outlined" sx={{ width: '50%' }} />

                <TextField required id="outlined-basic" label="Cidade" variant="outlined" sx={{ width: '50%' }} />
                <TextField required id="outlined-basic" label="Email" variant="outlined" sx={{ width: '50%' }} />
                
                <FormControl fullWidth>
                    <FormLabel>Anamnese</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Patologia dermatológica ou inflamatória na área a ser tratada, como dermatite ou infecção" />
                        <FormControlLabel control={<Checkbox />} label="Marcapasso, ou qualquer implante eletrônico ou metálico na região tratada" />
                        <FormControlLabel control={<Checkbox />} label="Tumores malignos, ativos ou recentes" />
                        <FormControlLabel control={<Checkbox />} label="Histórico de doenças que podem ser estimuladas pelo calor como Herpes, no local a ser tratado" />
                        <FormControlLabel control={<Checkbox />} label="Distúrbios Hormonais" />
                        <FormControlLabel control={<Checkbox />} label="Diabetes" />
                        <FormControlLabel control={<Checkbox />} label="Tatuagem ou maquiagem definitiva na área a ser tratada" />
                        <FormControlLabel control={<Checkbox />} label="Bronzeamento menos de um mês" />
                        <FormControlLabel control={<Checkbox />} label="Pós operatório de cirurgias estéticas nos últimos três meses" />
                        <FormControlLabel control={<Checkbox />} label="Peeling químico e procedimento com lase em menos de três meses" />
                        <FormControlLabel control={<Checkbox />} label="Gestante" />
                        <FormControlLabel control={<Checkbox />} label="Uso de Isotretinoina (Roacutan) nos últimos três meses" />
                        <FormControlLabel control={<Checkbox />} label="Hipersensibilidade a fototerapia (fotodermite, fotodermatose, porfiria, lúpus eritematoso sistêmico, lúpus discóide e rosáceas" />
                    </FormGroup>

                    <button>Cadastrar Cliente</button>
                </FormControl>
            </div>
        </>
    )
}
