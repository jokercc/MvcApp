
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, and Azure
-- --------------------------------------------------
-- Date Created: 05/04/2015 09:44:42
-- Generated from EDMX file: C:\Users\can\Documents\GitHub\MvcApp\MvcApp\Models\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Pro];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_BasicInfo_Manager]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[BasicInfo] DROP CONSTRAINT [FK_BasicInfo_Manager];
GO
IF OBJECT_ID(N'[dbo].[FK_EmergencyInfo_BasicInfo]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[EmergencyInfo] DROP CONSTRAINT [FK_EmergencyInfo_BasicInfo];
GO
IF OBJECT_ID(N'[dbo].[FK_HealthIndicator_BasicInfo]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HealthIndicator] DROP CONSTRAINT [FK_HealthIndicator_BasicInfo];
GO
IF OBJECT_ID(N'[dbo].[FK_HealthPlan_BasicInfo]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[HealthPlan] DROP CONSTRAINT [FK_HealthPlan_BasicInfo];
GO
IF OBJECT_ID(N'[dbo].[FK_Location_BasicInfo]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Location] DROP CONSTRAINT [FK_Location_BasicInfo];
GO
IF OBJECT_ID(N'[dbo].[FK_UserPhoto_BasicInfo]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[UserPhoto] DROP CONSTRAINT [FK_UserPhoto_BasicInfo];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[BasicInfo]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BasicInfo];
GO
IF OBJECT_ID(N'[dbo].[EmergencyInfo]', 'U') IS NOT NULL
    DROP TABLE [dbo].[EmergencyInfo];
GO
IF OBJECT_ID(N'[dbo].[HealthIndicator]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HealthIndicator];
GO
IF OBJECT_ID(N'[dbo].[HealthPlan]', 'U') IS NOT NULL
    DROP TABLE [dbo].[HealthPlan];
GO
IF OBJECT_ID(N'[dbo].[Location]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Location];
GO
IF OBJECT_ID(N'[dbo].[Manager]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Manager];
GO
IF OBJECT_ID(N'[dbo].[UserPhoto]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UserPhoto];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'BasicInfo'
CREATE TABLE [dbo].[BasicInfo] (
    [ID_User] bigint IDENTITY(1,1) NOT NULL,
    [ID_Manager] bigint  NOT NULL,
    [Name] varchar(50)  NOT NULL,
    [Age] smallint  NOT NULL,
    [Sex] bit  NOT NULL,
    [Marrige] bit  NOT NULL,
    [TelNum] varchar(20)  NOT NULL,
    [Address] varchar(50)  NOT NULL,
    [Children] varchar(50)  NOT NULL,
    [Hobby] varchar(50)  NOT NULL,
    [UserName] varchar(20)  NOT NULL,
    [UserPassword] varchar(20)  NOT NULL,
    [BloodThreshold] smallint  NULL,
    [GlucoseThreshold] smallint  NULL,
    [TempThreshold] smallint  NULL,
    [face100] varchar(50)  NOT NULL,
    [faceBig] varchar(50)  NOT NULL
);
GO

-- Creating table 'EmergencyInfo'
CREATE TABLE [dbo].[EmergencyInfo] (
    [ID_Emergency] bigint IDENTITY(1,1) NOT NULL,
    [ID_User] bigint  NOT NULL,
    [Location] varchar(100)  NOT NULL,
    [EmergencyDate] datetime  NOT NULL,
    [Staff] varchar(100)  NOT NULL,
    [IllnessAnalyses] varchar(100)  NOT NULL,
    [MedicalResult] varchar(100)  NOT NULL,
    [Advice] varchar(100)  NOT NULL
);
GO

-- Creating table 'HealthPlan'
CREATE TABLE [dbo].[HealthPlan] (
    [ID_Plan] bigint IDENTITY(1,1) NOT NULL,
    [ID_User] bigint  NOT NULL,
    [Recipes] varchar(100)  NOT NULL,
    [Movement] varchar(100)  NOT NULL,
    [Schedule] varchar(100)  NOT NULL
);
GO

-- Creating table 'Location'
CREATE TABLE [dbo].[Location] (
    [ID_Location] bigint IDENTITY(1,1) NOT NULL,
    [ID_User] bigint  NOT NULL,
    [DataTime] datetime  NOT NULL,
    [Longitude] float  NOT NULL,
    [Latitude] float  NOT NULL
);
GO

-- Creating table 'Manager'
CREATE TABLE [dbo].[Manager] (
    [ID_Manager] bigint IDENTITY(1,1) NOT NULL,
    [Man_Name] varchar(20)  NOT NULL,
    [Man_Sex] bit  NOT NULL,
    [Man_Age] smallint  NOT NULL,
    [Man_Tel] varchar(20)  NOT NULL,
    [Man_Add] varchar(100)  NOT NULL,
    [SysManIdentify] bit  NOT NULL,
    [ManName] varchar(20)  NOT NULL,
    [ManPassword] varchar(20)  NOT NULL,
    [GroupNum] smallint  NULL,
    [GroupPlan] varchar(1)  NULL,
    [GroupPhoto] varbinary(max)  NULL,
    [face100] varchar(50)  NOT NULL,
    [faceBig] varchar(50)  NOT NULL
);
GO

-- Creating table 'HealthIndicator'
CREATE TABLE [dbo].[HealthIndicator] (
    [ID_HealthIndica] bigint IDENTITY(1,1) NOT NULL,
    [ID_User] bigint  NOT NULL,
    [BloodGlucose] smallint  NOT NULL,
    [Duration] smallint  NOT NULL,
    [Calorie] smallint  NOT NULL,
    [Distance] smallint  NOT NULL,
    [HeartBeat] smallint  NOT NULL,
    [Date] datetime  NOT NULL,
    [SystolicPressure] smallint  NOT NULL,
    [DiastolicPressure] smallint  NOT NULL
);
GO

-- Creating table 'UserPhoto'
CREATE TABLE [dbo].[UserPhoto] (
    [ID_Photo] bigint IDENTITY(1,1) NOT NULL,
    [PhotoPath] varchar(250)  NOT NULL,
    [ID_User] bigint  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [ID_User] in table 'BasicInfo'
ALTER TABLE [dbo].[BasicInfo]
ADD CONSTRAINT [PK_BasicInfo]
    PRIMARY KEY CLUSTERED ([ID_User] ASC);
GO

-- Creating primary key on [ID_Emergency] in table 'EmergencyInfo'
ALTER TABLE [dbo].[EmergencyInfo]
ADD CONSTRAINT [PK_EmergencyInfo]
    PRIMARY KEY CLUSTERED ([ID_Emergency] ASC);
GO

-- Creating primary key on [ID_Plan] in table 'HealthPlan'
ALTER TABLE [dbo].[HealthPlan]
ADD CONSTRAINT [PK_HealthPlan]
    PRIMARY KEY CLUSTERED ([ID_Plan] ASC);
GO

-- Creating primary key on [ID_Location] in table 'Location'
ALTER TABLE [dbo].[Location]
ADD CONSTRAINT [PK_Location]
    PRIMARY KEY CLUSTERED ([ID_Location] ASC);
GO

-- Creating primary key on [ID_Manager] in table 'Manager'
ALTER TABLE [dbo].[Manager]
ADD CONSTRAINT [PK_Manager]
    PRIMARY KEY CLUSTERED ([ID_Manager] ASC);
GO

-- Creating primary key on [ID_HealthIndica] in table 'HealthIndicator'
ALTER TABLE [dbo].[HealthIndicator]
ADD CONSTRAINT [PK_HealthIndicator]
    PRIMARY KEY CLUSTERED ([ID_HealthIndica] ASC);
GO

-- Creating primary key on [ID_Photo] in table 'UserPhoto'
ALTER TABLE [dbo].[UserPhoto]
ADD CONSTRAINT [PK_UserPhoto]
    PRIMARY KEY CLUSTERED ([ID_Photo] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [ID_Manager] in table 'BasicInfo'
ALTER TABLE [dbo].[BasicInfo]
ADD CONSTRAINT [FK_BasicInfo_Manager]
    FOREIGN KEY ([ID_Manager])
    REFERENCES [dbo].[Manager]
        ([ID_Manager])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_BasicInfo_Manager'
CREATE INDEX [IX_FK_BasicInfo_Manager]
ON [dbo].[BasicInfo]
    ([ID_Manager]);
GO

-- Creating foreign key on [ID_User] in table 'EmergencyInfo'
ALTER TABLE [dbo].[EmergencyInfo]
ADD CONSTRAINT [FK_EmergencyInfo_BasicInfo]
    FOREIGN KEY ([ID_User])
    REFERENCES [dbo].[BasicInfo]
        ([ID_User])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_EmergencyInfo_BasicInfo'
CREATE INDEX [IX_FK_EmergencyInfo_BasicInfo]
ON [dbo].[EmergencyInfo]
    ([ID_User]);
GO

-- Creating foreign key on [ID_User] in table 'HealthPlan'
ALTER TABLE [dbo].[HealthPlan]
ADD CONSTRAINT [FK_HealthPlan_BasicInfo]
    FOREIGN KEY ([ID_User])
    REFERENCES [dbo].[BasicInfo]
        ([ID_User])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_HealthPlan_BasicInfo'
CREATE INDEX [IX_FK_HealthPlan_BasicInfo]
ON [dbo].[HealthPlan]
    ([ID_User]);
GO

-- Creating foreign key on [ID_User] in table 'Location'
ALTER TABLE [dbo].[Location]
ADD CONSTRAINT [FK_Location_BasicInfo]
    FOREIGN KEY ([ID_User])
    REFERENCES [dbo].[BasicInfo]
        ([ID_User])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_Location_BasicInfo'
CREATE INDEX [IX_FK_Location_BasicInfo]
ON [dbo].[Location]
    ([ID_User]);
GO

-- Creating foreign key on [ID_User] in table 'HealthIndicator'
ALTER TABLE [dbo].[HealthIndicator]
ADD CONSTRAINT [FK_HealthIndicator_BasicInfo]
    FOREIGN KEY ([ID_User])
    REFERENCES [dbo].[BasicInfo]
        ([ID_User])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_HealthIndicator_BasicInfo'
CREATE INDEX [IX_FK_HealthIndicator_BasicInfo]
ON [dbo].[HealthIndicator]
    ([ID_User]);
GO

-- Creating foreign key on [ID_User] in table 'UserPhoto'
ALTER TABLE [dbo].[UserPhoto]
ADD CONSTRAINT [FK_UserPhoto_BasicInfo1]
    FOREIGN KEY ([ID_User])
    REFERENCES [dbo].[BasicInfo]
        ([ID_User])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_UserPhoto_BasicInfo1'
CREATE INDEX [IX_FK_UserPhoto_BasicInfo1]
ON [dbo].[UserPhoto]
    ([ID_User]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------