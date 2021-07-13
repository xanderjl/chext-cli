import { Box } from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import { MdClose } from "react-icons/md"

const MobileToggle = ({ isOpen, onClick }) => {
  return (
    <Box
      as={isOpen ? AiOutlineMenu : MdClose}
      display={{ base: "block", md: "none" }}
      boxSize={6}
      onClick={onClick}
    />
  )
}

export default MobileToggle
