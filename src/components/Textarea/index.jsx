import { Container } from './styles';

export function Textarea ({ placeholder, value, ...rest}){
    return (
        <Container
          placeholder={placeholder}
          value={value}
          {...rest}
        />
    )
}