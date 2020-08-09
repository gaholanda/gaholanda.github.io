# Esquema de Cores (Color scheme)

Aplicando um CSS específico para o esquema de cores (color scheme), seja claro (light mode), ou escuro (dark mode).

## prefers-color-scheme

Essa propriedade do CSS, usada no @media, nos permite verificar qual o esquema de cores do usuário e aplicar um estilo específico.

Veja o suporte no [Can I Use?](https://caniuse.com/#search=prefers-color-scheme)

### No CSS

É possível usar o prefers-color-scheme para o modo claro (light) e o modo escuro (dark).
Desta forma, pode-se usar estilo separados para cada situação.

```css
@media (prefers-color-scheme: light){
  /* Estilo para o modo claro (light mode) */
}

@media (prefers-color-scheme: dark){
  /* Estilo para o modo dark (dark mode) */
}
```
