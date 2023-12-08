import { useState } from "react";
import styles from "./Notice.module.sass";
import List from "@/components/List";
import Notifications from "./Notifications";
import Filters from "./Filters";
import Offer from "./Offer";
import Preview from "./Preview";

import { notifications } from "@/mocks/notifications";
import { filters } from "@/mocks/filters";

type NoticeProps = {};

const Notice = ({}: NoticeProps) => {
    const [sorting, setSorting] = useState<string>("notification");
    const [selectedFilters, setSelectedFilters] = useState<Array<string>>([]);

    const tabsTokens = [
        {
            title: "Notification",
            value: "notification",
            counter: "24",
        },
        {
            title: "Activity",
            value: "activity",
            counter: "0",
        },
    ];

    const onSelectAll = () => {
        setSelectedFilters(filters.map((x: any) => x.value));
    };

    const onDeselectAll = () => {
        setSelectedFilters([]);
    };

    return (
        <div className={styles.row}>
            <div className={styles.col}>
                <List
                    tabs={tabsTokens}
                    tabsValue={sorting}
                    setTabsValue={setSorting}
                >
                    {sorting === "notification" ? (
                        <Notifications items={notifications} />
                    ) : (
                        <Offer />
                    )}
                </List>
            </div>
            <div className={styles.col}>
                {sorting === "notification" ? (
                    <Filters
                        filters={filters}
                        selectedFilters={selectedFilters}
                        setSelectedFilters={setSelectedFilters}
                        onSelectAll={onSelectAll}
                        onDeselectAll={onDeselectAll}
                    />
                ) : (
                    <Preview />
                )}
            </div>
        </div>
    );
};

export default Notice;
