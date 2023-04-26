## Lancement de l'app front
Pour installer les dépendances:

```bash
npm install
```

Pour lancer le serveur de dev:

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) avec ton navigateur pour voir le résultat.

Pour faire des modification, rendez-vous ici; `pages/index.tsx`. Le serveur de dev s'auto rafraichira.

## Les dépendances

Plusieurs dépendances ont été ajoutées au projet pour simplifier votre dévelopement. Voici les plus importantes :
- [React.js Documentation](https://react.dev/) - La documentation officielle de React. A lire et relire ... Elle est **très bien faite**.
- [Next.js Documentation](https://nextjs.org/docs) - Nous utiliserons principalement ce framework pour le *serveur de dev*, *build* et le *routage*.
- [Chakra Documentation](https://chakra-ui.com/docs/components) - Une librairie UI pour vous simplifier notamment l'implémentation des formulaires. Il ne faudra pas l'utiliser tout le temps.
- [TanStack Query](https://tanstack.com/query/latest/docs/react/quick-start) - Une librairie pour persiter les datas. Elle permet d'avoir un "état du serveur". (Cette notion sera expliquée en cours).

>Ce projet est en [Typescript](https://www.typescriptlang.org/).

Note: Ce repo a été construit à l'aide de [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
