const resolveRoutes = (route) => {

    if (route.length <= 5 && route != 'about') {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;

    }

    return `/${route}`;
};

export default resolveRoutes;