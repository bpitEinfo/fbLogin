import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Badge, Surface, Title } from "react-native-paper";
import Colors from "../Constants/Colors";
const IconSize = 26;

const AppHeader = ({ menu, back, title, right, rightfunction, optionalIcon, optionalFunc, navigation, headerbg, IconColor, optionalBadge }) => {
    return (
        <Surface style={[styles.header, { backgroundColor: headerbg }]}>
            <View style={styles.view}>
                {menu && <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <MaterialCommunityIcons name="menu-open" size={IconSize} color={IconColor} />
                </TouchableOpacity>}
                {back && <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Feather name="arrow-left" size={IconSize} color={IconColor} />

                </TouchableOpacity>}
            </View>
            <View style={styles.titleView}>
                <Title style={{ color: IconColor }}>{title}</Title>
            </View>
            <View style={[styles.view, styles.rightView]}>
                {/* {optionalFunc && <TouchableOpacity style={styles.rowView} onPress={optionalFunc} >
                    <Feather name={optionalIcon} size={IconSize} color={IconColor} />
                    {optionalBadge && <Badge style={{ position: 'absolute', top: -1, right: -1, }} >{optionalBadge}</Badge>}
                </TouchableOpacity>} */}
                {rightfunction && <TouchableOpacity onPress={rightfunction}>
                    <Feather name={right} size={IconSize} color={IconColor} />
                </TouchableOpacity>}
            </View>
        </Surface>
    )
}

export default AppHeader;

const styles = StyleSheet.create({
    header: {
        height: 55,
        elevation: 10,
        marginTop: 0,
        justifyContent: 'space-between',
        alignItem: 'center',
        flexDirection: 'row',
        // backgroundColor: 'yellow',
    },
    view: {
        //  flex: 1.8,
        margin: 10,
        alignItem: 'center',
        flexDirection: 'row',
        marginTop: 13,
        padding: 3,
    },
    titleView: {
        flex: 1,
        marginTop: 8,
        marginLeft: '28%',
    },
    rightView: {
        justifyContent: 'flex-end',
    },
    rowView: {
        flexDirection: 'row',
        alignItem: 'center',
        marginRight: 10,
    },
})