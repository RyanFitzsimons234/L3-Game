// Importing necessary classes, constants, and functions from external modules
import { Camera } from '../engine/Camera.js';
import { Ken, Ryu } from '../entities/fighters/index.js';
import { KenStage } from '../entities/stage/KenStage.js';
import { StatusBar } from '../entities/overlays/StatusBar.js';
import { FpsCounter } from '../entities/overlays/FpsCounter.js';
import { STAGE_MID_POINT, STAGE_PADDING } from '../constants/stage.js';
import { gameState } from '../state/gameState.js';
import { FighterAttackBaseData, FighterAttackStrength, FighterId } from '../constants/fighter.js';
import { LightHitSplash, MediumHitSplash, HeavyHitSplash, Shadow } from '../entities/fighters/shared/index.js';

// Definition of the BattleScene class
export class BattleScene {
    // Properties for storing fighter, camera, shadow, and entity objects
    fighters = [];
    camera = undefined;
    shadows = [];
    entities = []; 

    constructor() {
        // Creating an instance of the KenStage class
        this.stage = new KenStage();

        // Creating overlays for the scene, including StatusBar and FpsCounter
        this.overlays = [
            new StatusBar(this.state),
            new FpsCounter(),
        ];

        // Starting a new round in the battle scene
        this.startRound();
    }

    // Function to get the fighter entity class based on the fighter's ID
    getFighterEntityClass(id) {
        switch (id) {
            case FighterId.RYU:
                return Ryu;
            case FighterId.KEN:
                return Ken;
            default: 
                throw new Error('Unimplemented fighter entity request');
        }
    }

    // Function to create a fighter entity based on fighter state and index
    getFighterEntity(fighterState, index) {
        const FighterEntityClass = this.getFighterEntityClass(fighterState.id);

        return new FighterEntityClass(index, this.handleAttackHit.bind(this));
    }

    // Function to get all fighter entities
    getFighterEntities() {
        const fighterEntities = gameState.fighters.map(this.getFighterEntity.bind(this));

        fighterEntities[0].opponent = fighterEntities[1];
        fighterEntities[1].opponent = fighterEntities[0];

        return fighterEntities;
    }

    // Function to get the hit splash class based on the attack strength
    getHitSplashClass(strength) {
        switch (strength) {
            case FighterAttackStrength.LIGHT:
                return LightHitSplash;
            case FighterAttackStrength.MEDIUM:
                return MediumHitSplash;
            case FighterAttackStrength.HEAVY:
                return HeavyHitSplash;
            default:
                throw new Error('Unknown strength requested!');
        }
    }

    // Function to add an entity to the scene
    addEntity(EntityClass, ...args) {
        this.entities.push(new EntityClass(...args, this.removeEntity.bind(this)));
    }

    // Function to remove an entity from the scene
    removeEntity(entity) {
         this.entities = this.entities.filter((thisEntity) => thisEntity !== entity);
    }

    // Function to handle an attack hit event
    handleAttackHit(playerId, opponentId, position, strength) {
        gameState.fighters[playerId].score += FighterAttackBaseData[strength].score;
        gameState.fighters[opponentId].hitPoints -= FighterAttackBaseData[strength].damage;

        this.addEntity(this.getHitSplashClass(strength), position.x, position.y, playerId);
    }

    // Function to start a new round in the battle scene
    startRound() {
        this.fighters = this.getFighterEntities();
        this.camera = new Camera(STAGE_MID_POINT + STAGE_PADDING - 192, 16, this.fighters);
        this.shadows = this.fighters.map(fighter => new Shadow(fighter))
    }

    // Function to update the fighter entities
    updateFighters(time, context) {
        for (const fighter of this.fighters) {
            fighter.update(time, context, this.camera);
        }
    }

    // Function to update the shadow entities
    updateShadows(time, context) {
        for (const shadow of this.shadows) {
            shadow.update(time, context, this.camera);
        }
    }

    // Function to update all entities in the scene
    updateEntities(time, context) {
        for (const entity of this.entities) {
            entity.update(time, context, this.camera);
        }
    }

    // Function to update all overlays in the scene
    updateOverlays(time, context) {
        for (const overlay of this.overlays) {
            overlay.update(time, context, this.camera);
        }
    }

    // Function to update the entire scene
    update(time, context) {
        this.updateFighters(time, context);
        this.updateShadows(time, context);
        this.stage.update(time);
        this.updateEntities(time, context);
        this.camera.update(time, context);
        this.updateOverlays(time, context);
    }

    // Function to draw all fighter entities
    drawFighters(context) {
        for (const fighter of this.fighters){
            fighter.draw(context, this.camera);
        }
    }

    // Function to draw all shadow entities
    drawShadows(context) {
        for (const shadow of this.shadows){
            shadow.draw(context, this.camera);
        }
    }

    // Function to draw all entities
    drawEntities(context) {
        for (const entity of this.entities){
            entity.draw(context, this.camera);
        }
    }

    // Function to draw all overlays
    drawOverlays(context) {
        for (const overlay of this.overlays){
            overlay.draw(context, this.camera);
        }
    }

    // Function to draw the entire scene
    draw(context) {
        this.stage.drawBackground(context, this.camera);
        this.drawShadows(context);
        this.drawFighters(context);
        this.drawEntities(context);
        this.stage.drawForeground(context, this.camera);
        this.drawOverlays(context);
    }
}
