import Board from 'phaser3-rex-plugins/plugins/board/board/Board';
import Shape from 'phaser3-rex-plugins/plugins/board/shape/Shape';

function testBoard() {
    const scene = new Phaser.Scene({});

    scene.rexBoard.add.board({
        grid: {
            gridType: 'quadGrid',
            x: 0,
            y: 0,
            cellWidth: 0,
            cellHeight: 0,
            type: 'orthogonal', // 'orthogonal'|'isometric'
        },
        width: 0,
        height: 0,
    });

    const board = scene.rexBoard.add.board({
        grid: {
            gridType: 'hexagonGrid',
            x: 0,
            y: 0,
            cellWidth: 0,
            cellHeight: 0,
            staggeraxis: 'x', // 'x'|'y'
            staggerindex: 'odd', // 'odd'|'even'
        },
        width: 0,
        height: 0,
    });

    const chess = scene.add.image(0, 0, 'texture');
    const tileX = 0;
    const tileY = 0;
    const tileZ = 0;

    board.setBoardHeight(100);
    board.addChess(chess, tileX, tileY, tileZ, true);

    board.on('kickout', function (chessToAdd, occupiedChess, tileXYZ) {});

    board.removeChess(chess, null, null, null, true);

    board.removeChess(null, tileX, tileY, tileZ, true);

    board.removeAllChess(true);

    board.moveChess(chess, tileX, tileY, tileZ, true);

    board.swapChess(chess, chess, true);

    board.chessToTileXYZ(chess);

    board.tileXYZToChess(tileX, tileY, tileZ);

    board.tileXYToChessArray(tileX, tileY);
    board.tileXYToChessArray(tileX, tileY, []);

    board.tileZToChessArray(tileZ);
    board.tileZToChessArray(tileZ, []);

    board.tileXYArrayToChessArray([]);
    board.tileXYArrayToChessArray([], []);

    board.tileXYArrayToChessArray([], tileZ);
    board.tileXYArrayToChessArray([], tileZ, []);

    const worldX = 0;
    const worldY = 0;

    board.worldXYToChessArray(worldX, worldY);
    board.worldXYToChessArray(worldX, worldY, []);

    board.worldXYToChess(worldX, worldY);

    board.contains(tileX, tileY);
    board.contains(tileX, tileY, tileZ);

    board.exists(chess);

    const scope = {};
    const order = 1;
    board.forEachTileXY(
        function (tileXY: {x: number; y: number}, board: Board): void {
            // var tileX = tileXY.x;
            // var tileY = tileXY.y;
        },
        scope,
        order,
    );

    board.tileXYToWorldXY(tileX, tileY);
    board.tileXYToWorldXY(tileX, tileY, {});

    board.worldXYToTileXY(worldX, worldY);
    board.worldXYToTileXY(worldX, worldY, {});

    board.worldXYSnapToGrid(worldX, worldY);
    board.worldXYSnapToGrid(worldX, worldY, {});

    const tileA = {x: 0, y: 0};
    const tileB = {x: 0, y: 0};
    board.getDistance(tileA, tileB);

    const centerTileXY = {x: 0, y: 0};
    const radius = 10;
    board.ringToTileXYArray(centerTileXY, radius);
    board.ringToTileXYArray(centerTileXY, radius, []);

    const nearToFar = true;
    board.filledRingToTileXYArray(centerTileXY, radius);
    board.filledRingToTileXYArray(centerTileXY, radius, nearToFar);
    board.filledRingToTileXYArray(centerTileXY, radius, []);
    board.filledRingToTileXYArray(centerTileXY, radius, nearToFar, []);

    board.lineToTileXYArray(0, 0, 0, 0);
    board.lineToTileXYArray(0, 0, 0, 0, []);

    const line = new Phaser.Geom.Line(0, 0, 0, 0);
    board.lineToTileXYArray(line);
    board.lineToTileXYArray(line, []);

    const circle = new Phaser.Geom.Circle(0, 0, 10);
    board.circleToTileXYArray(circle);
    board.circleToTileXYArray(circle, []);

    const rectangle = new Phaser.Geom.Rectangle(0, 0, 100, 200);
    board.rectangleToTileXYArray(rectangle);
    board.rectangleToTileXYArray(rectangle, []);

    const ellipse = new Phaser.Geom.Ellipse(0, 0, 100, 200);
    board.ellipseToTileXYArray(ellipse);
    board.ellipseToTileXYArray(ellipse, []);

    const triangle = new Phaser.Geom.Triangle(0, 0, 1, 1, 2, 2);
    board.triangleToTileXYArray(triangle);
    board.triangleToTileXYArray(triangle, []);

    const polygon = new Phaser.Geom.Polygon([
        {x: 0, y: 0},
        {x: 1, y: 1},
    ]);

    board.polygonToTileXYArray(polygon);
    board.polygonToTileXYArray(polygon, []);

    board.angleBetween(tileA, tileB);

    board.isAngleInCone(chess, chess, 0, 10);

    board.directionBetween(chess, chess);
    board.directionBetween(chess, chess, false);

    board.isDirectionInCone(chess, chess, 0, 10);

    board.getOppositeDirection(tileX, tileY, 0);

    board.angleSnapToDirection(chess, 10);

    board.gridAlign(chess);
    board.gridAlign();

    board.isOverlappingPoint(worldX, worldY);
    board.isOverlappingPoint(worldX, worldY, tileZ);

    board.getNeighborTileXY({}, 0);
    board.getNeighborTileXY({}, 0, []);
    board.getNeighborTileXY({}, [0, 1]);
    board.getNeighborTileXY({}, [0, 1], []);
    board.getNeighborTileXY({}, '0,2,4');
    board.getNeighborTileXY({}, '0,2,4', []);
    board.getNeighborTileXY({}, null);
    board.getNeighborTileXY({}, null, []);

    board.getNeighborTileDirection({}, {});

    board.getNeighborTileXYAtAngle({}, Math.PI);
    board.getNeighborTileXYAtAngle({}, Math.PI, []);

    board.getNeighborChess(chess, 1);
    board.getNeighborChess(chess, 1, 1);
    board.getNeighborChess(chess, [0, 2, 4]);
    board.getNeighborChess(chess, [0, 2, 4], 1);
    board.getNeighborChess(chess, '0,2,4');
    board.getNeighborChess(chess, '0,2,4', 1);
    board.getNeighborChess(chess, null);
    board.getNeighborChess(chess, null, 1);

    board.areNeighbors(chess, chess);

    board.getTileXYAtDirection({}, 0, 10);
    board.getTileXYAtDirection({}, 0, 10, []);
    board.getTileXYAtDirection(
        {},
        0,
        {
            start: 1,
            end: 1,
            step: 1,
        },
        [],
    );
    board.getTileXYAtDirection({}, [0, 2, 4], 2);
    board.getTileXYAtDirection({}, '0,2,4', 2);
    board.getTileXYAtDirection({}, null, 2);
    board.getTileXYAtDirection({}, null, 2, []);

    board.getRandomEmptyTileXY(tileZ);
    board.getRandomEmptyTileXY(tileZ, []);

    board.getEmptyTileXYArray(tileZ);
    board.getEmptyTileXYArray(tileZ, []);

    board.getAllChess();

    board.fit([]);

    board.hasBlocker(tileX, tileY, tileZ);
    board.hasBlocker(tileX, tileY);

    board.setInteractive();
    board.setInteractive(false);

    board.on('tiledown', function (pointer, tileXY) {
        // var tileX = tileXY.x;
        // var tileY = tileXY.y;
    });

    board.getGridPoints(tileX, tileY);
    board.scene;

    const quadGrid = scene.rexBoard.add.quadGrid({
        x: 0,
        y: 0,
        cellWidth: 0,
        cellHeight: 0,
        type: 0,
        dir: 4,
    });
    quadGrid.setOriginPosition(worldX, worldY);
    quadGrid.setCellSize(10, 10);
    quadGrid.setType('orthogonal');
    quadGrid.getWorldXY(tileX, tileY);
    quadGrid.getWorldXY(tileX, tileY, []);

    const grid = scene.rexBoard.add.hexagonGrid({
        x: 0,
        y: 0,
        cellWidth: 0,
        cellHeight: 0,
        // size: undefined,
        staggeraxis: 1,
        staggerindex: 1,
    });
    grid.setOriginPosition(worldX, worldY);
    grid.setCellSize(10, 10);
    grid.setType('y', 'even');
    grid.getWorldXY(tileX, tileY);
    grid.getWorldXY(tileX, tileY, {});
    grid.getWorldXY(tileX, tileY);
    grid.getWorldXY(tileX, tileY, {});

    scene.rexBoard.add.shape(board, tileX, tileY, tileZ, '#101020');
    const shape = new Shape(board, tileX, tileY, tileZ, '#101020');
    scene.add.existing(shape);

    const config = {
        speed: 400,
        rotateToTarget: false,
        occupiedTest: false,
        blockerTest: false,
        sneak: false,
    };

    const moveTo = scene.rexBoard.add.moveTo(chess, config);
    moveTo.moveTo(tileX, tileY);
    const tileXY = {x: 123, y: 123};
    moveTo.moveTo(tileXY);

    const direction = 0;
    moveTo.moveToward(direction);

    moveTo.moveToRandomNeighbor();

    moveTo.moveAway(tileX, tileY);
    moveTo.moveAway(tileXY);

    moveTo.moveCloser(tileX, tileY);
    moveTo.moveCloser(tileXY);

    moveTo.canMoveTo(tileX, tileY);

    moveTo.lastMoveResult;

    moveTo.destinationTileX;
    moveTo.destinationTileY;
    moveTo.destinationDirection;

    moveTo.pause();
    moveTo.resume();
    moveTo.stop();

    moveTo.setEnable();
    moveTo.enable = true;
    moveTo.setEnable(false);
    moveTo.enable = false;

    const speed = 100;
    moveTo.setSpeed(speed);
    moveTo.speed = speed;

    moveTo.setRotateToTarget(true);

    moveTo.on('occupy', function (occupiedChess: any, gameObject: any, moveTo: any) {
        // Move away occupiedChess
    });

    moveTo.isRunning;

    const pathFinder = scene.rexBoard.add.pathFinder({
        occupiedTest: false,
        blockerTest: false,

        // ** cost **
        cost: 1, // constant cost
        costCallback: undefined,
        costCallbackScope: undefined,
        cacheCost: true,

        pathMode: 10, // A*
        weight: 10, // weight for A* searching mode
        shuffleNeighbors: false,
    });

    scene.rexBoard.add.pathFinder(chess, config);

    pathFinder.setChess(chess);

    const callback = function (curTileXY: any, preTileXY: any, pathFinder: any) {
        return 1;
    };

    pathFinder.setCostFunction(callback);
    pathFinder.setCostFunction(callback, scope);

    pathFinder.setPathMode('A*-line');
    pathFinder.setPathMode(12);

    pathFinder.findArea([]);
    pathFinder.findArea([], []);

    const endTileXY = {x: 1, y: 1};
    pathFinder.getPath(endTileXY);

    pathFinder.findPath(endTileXY);
    pathFinder.findPath(endTileXY, [], true, []);

    pathFinder.tileXYToCost(tileX, tileY, true);

    const monopoly = scene.rexBoard.add.monopoly(chess, {
        face: 0,

        // ** cost **
        pathTileZ: 0,
        cost: 1, // constant cost
        costCallback: undefined,
        costCallbackScope: undefined,
    });

    monopoly.setCostFunction(callback);
    monopoly.setCostFunction(callback, scope);

    monopoly.setFace(direction);
    monopoly.getPath([]);
    monopoly.getPath([], []);

    const fieldOfView = scene.rexBoard.add.fieldOfView(chess, {
        face: 0,
        cone: undefined,
        coneMode: 0,

        // ** pre-test **
        occupiedTest: false,
        blockerTest: false,
        preTestCallback: undefined,
        preTestCallbackScope: undefined,

        // ** cost **
        costCallback: undefined,
        costCallbackScope: undefined,
        cost: undefined, // constant cost

        debug: {
            graphics: undefined,
            visibleLineColor: 0x00ff00,
            invisibleLineColor: 0xff0000,
            log: false,
        },
    });

    fieldOfView.setPreTestFunction(callback, scope);

    fieldOfView.setCostFunction(callback);

    fieldOfView.isInLOS(chess);
    fieldOfView.isInLOS(chess, []);
    fieldOfView.isInLOS(chess, [], {});

    fieldOfView.findFOV();
    fieldOfView.findFOV([]);
    fieldOfView.findFOV([], {});
    fieldOfView.findFOV({}, {}, []);

    const chessArray = [chess];
    fieldOfView.LOS(chessArray);
    const originTileXY = {};
    fieldOfView.LOS(chessArray, originTileXY);
    fieldOfView.LOS(chessArray, []);
    fieldOfView.LOS(chessArray, originTileXY, []);
    fieldOfView.LOS(chessArray, [], {}, []);

    fieldOfView.face;
    fieldOfView.setFace(direction);
    fieldOfView.face = direction;
    fieldOfView.face++;

    fieldOfView.clearDebugGraphics();
    fieldOfView.setDebugLineColor('#fff', '#fff');

    const match = scene.rexBoard.add.match({
        board: board,
        wildcard: undefined,
        dirMask: undefined,
    });

    match.setBoard(board);

    match.refreshSymbols(function (tileXY: any, board: any): any {
        return null;
    }, scope);

    match.match(
        1,
        function (result: any, board: Board) {
            // var chess = board.tileXYArrayToChess(result.tileXY, 0);
            // GroupCall(chess, function (chess) { chess.setScale(0.8); });
        },
        scope,
    );

    match.anyMatch(1);
    match.anyMatch([]);

    match.group(1, 1);
    match.group(1, 1, []);

    const width = 10;
    const height = 10;
    const type = 0;

    scene.rexBoard.add.hexagonMap.hexagon(board, radius);
    scene.rexBoard.add.hexagonMap.parallelogram(board, type, width, height);
    scene.rexBoard.add.hexagonMap.triangle(board, type, height);

    scene.rexBoard.hexagonMap.triangle(board, type, height);
    scene.rexBoard.hexagonMap.triangle(board, type, height, []);

    const lineWidth = 10;
    scene.rexBoard.createTileTexture(board, 'key', '#fff', '#fff', lineWidth);

    const x = 0;
    const y = 0;
    const miniBoard = scene.rexBoard.add.miniBoard(x, y, {
        grid: grid,
        draggable: undefined,
    });

    miniBoard.addChess(chess, tileX, tileY, tileZ);

    miniBoard.removeChess(chess, null, null, null, true);

    miniBoard.removeAllChess(true);

    miniBoard.setOrigin(0.5);
    miniBoard.setOrigin(0.5, 0.5);
    miniBoard.setOrigin('center');
}
