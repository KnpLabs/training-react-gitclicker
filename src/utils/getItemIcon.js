import BashIcon from 'devicon/icons/bash/bash-original.svg'
import GitIcon from 'devicon/icons/git/git-original.svg'
import JavascriptIcon from 'devicon/icons/javascript/javascript-original.svg'
import ReactIcon from 'devicon/icons/react/react-original.svg'
import VimIcon from 'devicon/icons/vim/vim-original.svg'
import IEIcon from 'devicon/icons/ie10/ie10-original.svg'

const iconMap = {
  'Bash': BashIcon,
  'Git': GitIcon,
  'Javascript': JavascriptIcon,
  'React': ReactIcon,
  'Vim': VimIcon
}

export default item => iconMap[item.name] ?? IEIcon
