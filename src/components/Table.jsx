import React from "react";
import { Text, View } from "react-native";
import PageButton from "./button/PageButton";

const Table = ({ viewFields, entriesList, totalEntries, totalPages, pageNo, setPageNo, entryActions, title, tableActions , ViewComponent}) => {
    return (
        entriesList.length > 0 ?
        <View className="flex flex-col border overflow-auto rounded-xl">
            <View className="flex justify-between items-center px-2 py-1">
                <View className="flex items-center gap-2">
                    <Text>{title}</Text>
                    {!!totalEntries && <Text className="rounded-xl px-1 text-sm font-bold bg-sky-800 text-white    ">{totalEntries}</Text>}
                    {!!totalPages &&
                        <PageButton pageNo={pageNo} setPageNo={setPageNo} totalPagesCount={totalPages} />
                    }
                </View>
                {tableActions}
            </View>
            <View>
                {
                    entriesList.map(entry => 
                      <ViewComponent data={entry}/> )
                }
            </View>

            

        </View>:
        <Text>No enteries</Text>
    );
}

export default Table;