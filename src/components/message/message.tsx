import { useTheme } from "@/theme/providers"
import { Button } from "@mui/material"

export const Message: React.FC = () => {
    const { toggleTheme } = useTheme()
    return (
        <>
            <h1>BR Informática TEC1dd</h1>
            <Button variant="contained" color="primary" onClick={toggleTheme}>
                Toggle Theme
            </Button>
        </>
    )
}