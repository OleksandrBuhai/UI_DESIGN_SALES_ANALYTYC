import { Add } from '@/components/Add/Add'
import { Analytic } from "@/components/Analytic/Analityc"
import { Navbar } from "@/components/Navbar/Navbar"
import { Orders } from "@/components/Orders/Orders"
import { Sales } from "@/components/Sales/Sales"

import { Shopping } from "@/components/Shopping/Shopping"
import { Statistic } from "@/components/Statistic/Statistic"
import { Section } from "./style"



export const Dashboard = () => {
    return (
        <Section>
            <Navbar />
            <div className="grid">
                <div className="grid_1">
                    <Statistic />
                    <Sales />
                    <Orders />
                </div>
                <div className="grid_2">
                    <Analytic />
                    <Shopping />
                    <Add />
                </div>
            </div>
        </Section>
    )
}


