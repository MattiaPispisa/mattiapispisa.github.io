import React from "react";
import FullScreen from "./FullScreen.tsx";
import {Button} from "../Common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

type Props = {
    children: React.ReactNode;
    onClose: () => void;
}

function FullScreenModal(props: Props) {
    const {children, onClose} = props;

    return <FullScreen
    >
        <div className={"flex flex-col overflow-auto p-8 bg-slate-50 dark:bg-slate-900 rounded-lg"}>
            <Button
                className={`self-end`}
                semantic={"contrast"}
                variant={"outlined"}
                icon={<FontAwesomeIcon size={"2xl"} icon={faXmark}/>}
                onClick={onClose}
            />
            {children}
        </div>
    </FullScreen>
}

export default FullScreenModal;