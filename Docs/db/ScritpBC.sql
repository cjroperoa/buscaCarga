-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bc123
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bc123
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bc123` DEFAULT CHARACTER SET utf8 ;
USE `bc123` ;

-- -----------------------------------------------------
-- Table `bc123`.`tbl_pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_pais` (
  `idpais` INT(11) NOT NULL AUTO_INCREMENT,
  `Cod_pais` VARCHAR(45) NULL,
  `nombre` VARCHAR(45) NULL DEFAULT 'Nombre de pais',
  PRIMARY KEY (`idpais`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bc123`.`tbl_departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_departamento` (
  `iddepartamento` INT(11) NOT NULL AUTO_INCREMENT,
  `Cod_Departamento` INT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `idpais` INT(11) NOT NULL,
  PRIMARY KEY (`iddepartamento`),
  INDEX `fk_tbl_departamento_tbl_pais1_idx` (`idpais` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_departamento_tbl_pais1`
    FOREIGN KEY (`idpais`)
    REFERENCES `bc123`.`tbl_pais` (`idpais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bc123`.`estados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`estados` (
  `idestados` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NULL,
  `tipoEstado` VARCHAR(45) NULL,
  PRIMARY KEY (`idestados`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`tbl_membresia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_membresia` (
  `id_membresia` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(32) NOT NULL,
  `valor` DOUBLE NOT NULL,
  `soportePago` VARCHAR(128) NULL,
  `estados_idestados` INT NOT NULL,
  PRIMARY KEY (`id_membresia`),
  INDEX `fk_tbl_membresia_estados1_idx` (`estados_idestados` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_membresia_estados1`
    FOREIGN KEY (`estados_idestados`)
    REFERENCES `bc123`.`estados` (`idestados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '	';


-- -----------------------------------------------------
-- Table `bc123`.`tbl_municipio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_municipio` (
  `idmunicipio` INT(11) NOT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `cod_municipio` VARCHAR(45) NULL,
  `tbl_departamento_iddepartamento` INT(11) NOT NULL,
  PRIMARY KEY (`idmunicipio`),
  INDEX `fk_tbl_municipio_tbl_departamento1_idx` (`tbl_departamento_iddepartamento` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_municipio_tbl_departamento1`
    FOREIGN KEY (`tbl_departamento_iddepartamento`)
    REFERENCES `bc123`.`tbl_departamento` (`iddepartamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bc123`.`tbl_permisos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_permisos` (
  `id_permisos` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(32) NULL DEFAULT NULL,
  PRIMARY KEY (`id_permisos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bc123`.`tbl_rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_rol` (
  `codigoRol` INT(11) NOT NULL AUTO_INCREMENT,
  `nombrerol` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`codigoRol`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bc123`.`tbl_rol_permisos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_rol_permisos` (
  `idrolxpermiso` INT NOT NULL AUTO_INCREMENT,
  `fecha_conexion` DATE NULL,
  `tbl_permisos_id_permisos` INT(11) NOT NULL,
  `tbl_rol_codigoRol` INT(11) NOT NULL,
  INDEX `fk_tbl_rol_permisos_tbl_permisos1_idx` (`tbl_permisos_id_permisos` ASC) VISIBLE,
  PRIMARY KEY (`idrolxpermiso`),
  INDEX `fk_tbl_rol_permisos_tbl_rol1_idx` (`tbl_rol_codigoRol` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_rol_permisos_tbl_permisos1`
    FOREIGN KEY (`tbl_permisos_id_permisos`)
    REFERENCES `bc123`.`tbl_permisos` (`id_permisos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_rol_permisos_tbl_rol1`
    FOREIGN KEY (`tbl_rol_codigoRol`)
    REFERENCES `bc123`.`tbl_rol` (`codigoRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bc123`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `cedula` INT NULL,
  `nombres` VARCHAR(64) NULL,
  `contraseña` VARCHAR(45) NULL,
  `correoElectronico` VARCHAR(64) NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`tbl_usuario_rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_usuario_rol` (
  `idUsuarioRol` INT NOT NULL AUTO_INCREMENT,
  `fecha_conexion` DATE NULL,
  `tbl_rol_codigoRol` INT(11) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idUsuarioRol`),
  INDEX `fk_tbl_usuario_rol_tbl_rol1_idx` (`tbl_rol_codigoRol` ASC) VISIBLE,
  INDEX `fk_tbl_usuario_rol_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_usuario_rol_tbl_rol1`
    FOREIGN KEY (`tbl_rol_codigoRol`)
    REFERENCES `bc123`.`tbl_rol` (`codigoRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_usuario_rol_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `bc123`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bc123`.`tbl _remitente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl _remitente` (
  `id_remitente` INT NOT NULL AUTO_INCREMENT,
  `telefonoFijo` VARCHAR(45) NULL,
  `ciudadResidencia` VARCHAR(45) NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`id_remitente`),
  INDEX `fk_tbl _remitente_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_tbl _remitente_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `bc123`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`tbl_transportador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_transportador` (
  `id_transportador` INT NOT NULL AUTO_INCREMENT,
  `experiencia` INT NULL,
  `tbl_membresia_id_membresia` INT(11) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`id_transportador`),
  INDEX `fk_tbl_transportador_tbl_membresia1_idx` (`tbl_membresia_id_membresia` ASC) VISIBLE,
  INDEX `fk_tbl_transportador_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_transportador_tbl_membresia1`
    FOREIGN KEY (`tbl_membresia_id_membresia`)
    REFERENCES `bc123`.`tbl_membresia` (`id_membresia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_transportador_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `bc123`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`tbl_calificacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`tbl_calificacion` (
  `id_calificacion` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(16) NULL,
  `estado` TINYINT(1) NULL,
  PRIMARY KEY (`id_calificacion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`Calificacion_Remitente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`Calificacion_Remitente` (
  `idCalificacionRemitente` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL,
  `comentario` TEXT(512) NULL,
  `tbl_transportador_id_transportador` INT NOT NULL,
  `tbl _remitente_id_remitente` INT NOT NULL,
  `tbl_calificacion_id_calificacion` INT NOT NULL,
  PRIMARY KEY (`idCalificacionRemitente`),
  INDEX `fk_Calificacion_Remitente_tbl_transportador1_idx` (`tbl_transportador_id_transportador` ASC) VISIBLE,
  INDEX `fk_Calificacion_Remitente_tbl _remitente1_idx` (`tbl _remitente_id_remitente` ASC) VISIBLE,
  INDEX `fk_Calificacion_Remitente_tbl_calificacion1_idx` (`tbl_calificacion_id_calificacion` ASC) VISIBLE,
  CONSTRAINT `fk_Calificacion_Remitente_tbl_transportador1`
    FOREIGN KEY (`tbl_transportador_id_transportador`)
    REFERENCES `bc123`.`tbl_transportador` (`id_transportador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Calificacion_Remitente_tbl _remitente1`
    FOREIGN KEY (`tbl _remitente_id_remitente`)
    REFERENCES `bc123`.`tbl _remitente` (`id_remitente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Calificacion_Remitente_tbl_calificacion1`
    FOREIGN KEY (`tbl_calificacion_id_calificacion`)
    REFERENCES `bc123`.`tbl_calificacion` (`id_calificacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`Calificacion_Transportador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`Calificacion_Transportador` (
  `idCalificacionTransportador` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL,
  `comentario` TEXT(512) NULL,
  `tbl _remitente_id_remitente` INT NOT NULL,
  `tbl_transportador_id_transportador` INT NOT NULL,
  `tbl_calificacion_id_calificacion` INT NOT NULL,
  PRIMARY KEY (`idCalificacionTransportador`),
  INDEX `fk_Calificacion_Transportador_tbl _remitente1_idx` (`tbl _remitente_id_remitente` ASC) VISIBLE,
  INDEX `fk_Calificacion_Transportador_tbl_transportador1_idx` (`tbl_transportador_id_transportador` ASC) VISIBLE,
  INDEX `fk_Calificacion_Transportador_tbl_calificacion1_idx` (`tbl_calificacion_id_calificacion` ASC) VISIBLE,
  CONSTRAINT `fk_Calificacion_Transportador_tbl _remitente1`
    FOREIGN KEY (`tbl _remitente_id_remitente`)
    REFERENCES `bc123`.`tbl _remitente` (`id_remitente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Calificacion_Transportador_tbl_transportador1`
    FOREIGN KEY (`tbl_transportador_id_transportador`)
    REFERENCES `bc123`.`tbl_transportador` (`id_transportador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Calificacion_Transportador_tbl_calificacion1`
    FOREIGN KEY (`tbl_calificacion_id_calificacion`)
    REFERENCES `bc123`.`tbl_calificacion` (`id_calificacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`paquete`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`paquete` (
  `idpaquete` INT NOT NULL AUTO_INCREMENT,
  `ancho` INT NULL,
  `alto` INT NULL,
  `peso` INT NULL,
  `descripcion` TEXT NULL,
  `fechaPublicacion` DATETIME NULL,
  PRIMARY KEY (`idpaquete`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`vehiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`vehiculo` (
  `idvehiculo` INT NOT NULL AUTO_INCREMENT,
  `placa` VARCHAR(6) NULL,
  `modelo` YEAR NULL,
  PRIMARY KEY (`idvehiculo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`destino`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`destino` (
  `iddestino` INT NOT NULL AUTO_INCREMENT,
  `tbl_municipio_idmunicipio` INT(11) NOT NULL,
  PRIMARY KEY (`iddestino`),
  INDEX `fk_destino_tbl_municipio1_idx` (`tbl_municipio_idmunicipio` ASC) VISIBLE,
  CONSTRAINT `fk_destino_tbl_municipio1`
    FOREIGN KEY (`tbl_municipio_idmunicipio`)
    REFERENCES `bc123`.`tbl_municipio` (`idmunicipio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`origen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`origen` (
  `idorigen` INT NOT NULL AUTO_INCREMENT,
  `tbl_municipio_idmunicipio` INT(11) NOT NULL,
  PRIMARY KEY (`idorigen`),
  INDEX `fk_origen_tbl_municipio1_idx` (`tbl_municipio_idmunicipio` ASC) VISIBLE,
  CONSTRAINT `fk_origen_tbl_municipio1`
    FOREIGN KEY (`tbl_municipio_idmunicipio`)
    REFERENCES `bc123`.`tbl_municipio` (`idmunicipio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`envio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`envio` (
  `idenvio` INT NOT NULL AUTO_INCREMENT,
  `detalle` TEXT(256) NULL,
  `fechaenvio` DATE NULL,
  `fechaentrega` DATE NULL,
  `fecharecogida` DATE NULL,
  `paquete_idpaquete` INT NOT NULL,
  `vehiculo_idvehiculo` INT NOT NULL,
  `destino_iddestino` INT NOT NULL,
  `origen_idorigen` INT NOT NULL,
  `tbl_transportador_id_transportador` INT NOT NULL,
  PRIMARY KEY (`idenvio`),
  INDEX `fk_envio_paquete1_idx` (`paquete_idpaquete` ASC) VISIBLE,
  INDEX `fk_envio_vehiculo1_idx` (`vehiculo_idvehiculo` ASC) VISIBLE,
  INDEX `fk_envio_destino1_idx` (`destino_iddestino` ASC) VISIBLE,
  INDEX `fk_envio_origen1_idx` (`origen_idorigen` ASC) VISIBLE,
  INDEX `fk_envio_tbl_transportador1_idx` (`tbl_transportador_id_transportador` ASC) VISIBLE,
  CONSTRAINT `fk_envio_paquete1`
    FOREIGN KEY (`paquete_idpaquete`)
    REFERENCES `bc123`.`paquete` (`idpaquete`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_envio_vehiculo1`
    FOREIGN KEY (`vehiculo_idvehiculo`)
    REFERENCES `bc123`.`vehiculo` (`idvehiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_envio_destino1`
    FOREIGN KEY (`destino_iddestino`)
    REFERENCES `bc123`.`destino` (`iddestino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_envio_origen1`
    FOREIGN KEY (`origen_idorigen`)
    REFERENCES `bc123`.`origen` (`idorigen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_envio_tbl_transportador1`
    FOREIGN KEY (`tbl_transportador_id_transportador`)
    REFERENCES `bc123`.`tbl_transportador` (`id_transportador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc123`.`oferta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc123`.`oferta` (
  `idoferta` INT NOT NULL AUTO_INCREMENT,
  `valor` VARCHAR(45) NULL,
  `decripcion` TEXT(256) NULL,
  `envio_idenvio` INT NOT NULL,
  `tbl _remitente_id_remitente` INT NOT NULL,
  PRIMARY KEY (`idoferta`),
  INDEX `fk_oferta_envio1_idx` (`envio_idenvio` ASC) VISIBLE,
  INDEX `fk_oferta_tbl _remitente1_idx` (`tbl _remitente_id_remitente` ASC) VISIBLE,
  CONSTRAINT `fk_oferta_envio1`
    FOREIGN KEY (`envio_idenvio`)
    REFERENCES `bc123`.`envio` (`idenvio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_oferta_tbl _remitente1`
    FOREIGN KEY (`tbl _remitente_id_remitente`)
    REFERENCES `bc123`.`tbl _remitente` (`id_remitente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
