declare module 'phaser3-rex-plugins/plugins/gameobjects/containerlite/Children' {
    interface ChildrenType {
        getChildren(): any;

        getAllChildren(out?: any[]): any[];

        getAllVisibleChildren(out?: any[]): any[];

        contains(gameObject: any): boolean;

        getByName(name: string, recursive?: boolean): any;

        getRandom(startIndex?: number, length?: number): any;

        getFirst(property: any, value: any, startIndex: any, endIndex: any): any;

        getAll(property: any, value: any, startIndex: any, endIndex: any): any;

        count(property: any, value: any, startIndex: any, endIndex: any): number;

        swap(child1: any, child2: any): this;

        moveTo(child: any, index: number): this;

        setAll(property: any, value: any, startIndex: any, endIndex: any): this;
    }

    const Children: ChildrenType;
    export default Children;
}
