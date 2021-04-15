import Mainlayout from "./layout/mainLayout";
import demo from "./page/demo";

const routers = [

    {
        path: '/',
        component: Mainlayout,
        routers: [

            {
                path: '/Demo',
                component: demo
            },



        ]
    }

]
export default routers;