import React, { useState } from "react"
import EngineeringIcon from '@mui/icons-material/Engineering';
import "./styles.scss"
import { IconButton } from "@mui/material";

type Tprops = {

}

export const ChatBot: React.FC<Tprops> = () => {
    const [openBot, setOpenBot] = useState<boolean>(false)

    return (
        <div className="chatBot">
            <IconButton onClick={() => setOpenBot(!openBot)} className="iconContainer"><EngineeringIcon /></IconButton>
        </div>
    )
}