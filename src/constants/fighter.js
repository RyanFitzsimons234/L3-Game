// Friction applied when pushing (used for physics simulation)
export const PUSH_FRICTION = 66;

// Initial distance between fighters at the start of a match
export const FIGHTER_START_DISTANCE = 88;

// Enumeration for fighter directions
export const FighterDirection = {
    LEFT: -1,
    RIGHT: 1,
};

// Enumeration for fighter IDs
export const FighterId = {
    RYU: 'Ryu',
    KEN: 'Ken',
};

// Enumeration for fighter attack types
export const FighterAttackType = {
    PUNCH: 'punch',
    KICK: 'kick',
};

// Enumeration for fighter attack strengths
export const FighterAttackStrength = {
    LIGHT: 'light',
    MEDIUM: 'medium',
    HEAVY: 'heavy',
};

// Data for fighter attacks, including scores and damage for different strengths
export const FighterAttackBaseData = {
    [FighterAttackStrength.LIGHT]: {
        score: 100,
        damage: 6,
    },
    [FighterAttackStrength.MEDIUM]: {
        score: 300,
        damage: 10,
    },
    [FighterAttackStrength.HEAVY]: {
        score: 500,
        damage: 14,
    },
};
// Enumeration for fighter states during gameplay
export const FighterState = {
    IDLE : 'idle',
    WALK_FORWARD: 'walkForwards',
    WALK_BACKWARD: 'walkBackwards',
    JUMP_START: 'jumpStart',
    JUMP_UP: 'jumpUp',
    JUMP_FORWARD: 'jumpForwards',
    JUMP_BAKCWARD: 'jumpBackwards',
    JUMP_LAND: 'jumpLand',
    CROUCH: 'crouch',
    CROUCH_DOWN: 'crouchDown',
    CROUCH_UP: 'crouchUp',
    IDLE_TURN: 'idleTurn',
    CROUCH_TURN: 'crouchTurn',
    LIGHT_PUNCH: 'lightPunch',
    MEDIUM_PUNCH: 'mediumPunch',
    HEAVY_PUNCH: 'heavyPunch',
    LIGHT_KICK: 'lightKick',
    MEDIUM_KICK: 'mediumKick',
    HEAVY_KICK: 'heavyKick',
};

// Enumeration for frame delays during animation
export const FrameDelay = {
    FREEZE: 0,
    TRANSITION: -1,
};

// Configuration for push box dimensions in different fighter states
export const PushBox = {
    IDLE:[-16, -80, 32, 78],
    JUMP:[-16, -91, 32, 66],
    BEND:[-16, -58, 32, 58],
    CROUCH:[-16, -50, 32, 50],
};

// Configuration for hurt box dimensions in different fighter states
export const HurtBox = {
    IDLE: [[-8, -88, 24, 16], [-26, -74, 40, 42], [-26, -31, 40, 32]],
    BACKWARD: [[-19, -88, 24, 16], [-26, -74, 48, 42], [-26, -31, 48, 32]],
    FORWARD: [[-3, -88, 24, 16], [-26, -74, 40, 42], [-26, -31, 40, 32]],
    JUMP: [[-13, -106, 28, 18], [-26, -90, 40, 42], [-22, -66, 38, 18]],
    BEND: [[-2, -68, 24, 18], [-16, -53, 44, 24], [-16, -24, 44, 24]],
    CROUCH: [[6, -61, 24, 18], [-16, -46, 44, 24], [-16, -24, 44, 24]],
    PUNCH: [[11, -94, 24, 18], [-7, -77, 40, 43], [-7, -33, 40, 33]],
};
